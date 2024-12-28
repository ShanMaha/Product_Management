import React, { useState, useEffect } from 'react';

function Setting() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    darkMode: false,
    notifications: {
      email: true,
      sms: false,
      inApp: true,
    },
    privacy: 'friends',
    twoFactorAuth: false,
    bio: '',
    language: 'en',
    region: 'US',
  });

  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    try {
      const savedProfile = JSON.parse(localStorage.getItem('profile'));
      if (savedProfile) {
        setProfile(savedProfile);
        setPreview(savedProfile.profilePicture || null);
      }
    } catch (e) {
      console.error('Error loading profile from localStorage:', e);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: checked,
      }));
    } else {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (!profile.username || !profile.email) {
      setError('Username and Email are required.');
      return;
    }
    try {
      localStorage.setItem('profile', JSON.stringify(profile));
      setEditing(false);
      setError('');
      setSuccessMessage('Profile updated successfully!');
    } catch (e) {
      if (e.code === 22 || e.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded! Consider cleaning up old data.');
      } else {
        console.error('An error occurred while saving to localStorage:', e);
      }
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${profile.darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg`}>
      <h1 className="text-3xl font-semibold mb-6 text-center">Profile Settings</h1>

      {editing ? (
        <div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username:</label>
              <input
                type="text"
                name="username"
                value={profile.username || ''}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={profile.email || ''}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={profile.password || ''}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Profile Picture:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handlePictureChange}
                className="w-full p-3 border rounded-md shadow-sm"
              />
              {preview && <img src={preview} alt="Preview" className="mt-3 w-32 h-32 object-cover rounded-full" />}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio:</label>
              <textarea
                name="bio"
                value={profile.bio || ''}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <label className="text-sm font-medium">Dark Mode:</label>
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={profile.darkMode || false}
                  onChange={handleChange}
                  className="ml-2"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-medium mb-2">Notification Preferences</h2>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="email"
                    checked={profile.notifications?.email || false}
                    onChange={(e) =>
                      setProfile((prevProfile) => ({
                        ...prevProfile,
                        notifications: {
                          ...prevProfile.notifications,
                          email: e.target.checked,
                        },
                      }))
                    }
                    className="h-4 w-4"
                  />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="sms"
                    checked={profile.notifications?.sms || false}
                    onChange={(e) =>
                      setProfile((prevProfile) => ({
                        ...prevProfile,
                        notifications: {
                          ...prevProfile.notifications,
                          sms: e.target.checked,
                        },
                      }))
                    }
                    className="h-4 w-4"
                  />
                  <span>SMS Notifications</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="inApp"
                    checked={profile.notifications?.inApp || false}
                    onChange={(e) =>
                      setProfile((prevProfile) => ({
                        ...prevProfile,
                        notifications: {
                          ...prevProfile.notifications,
                          inApp: e.target.checked,
                        },
                      }))
                    }
                    className="h-4 w-4"
                  />
                  <span>In-App Notifications</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Privacy Settings:</label>
              <select
                name="privacy"
                value={profile.privacy || 'friends'}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium">
                <input
                  type="checkbox"
                  name="twoFactorAuth"
                  checked={profile.twoFactorAuth || false}
                  onChange={handleChange}
                  className="h-4 w-4"
                />
                <span>Enable Two-Factor Authentication</span>
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Language:</label>
              <select
                name="language"
                value={profile.language || 'en'}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Tamil</option>
                <option value="fr">Sinhala</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Region:</label>
              <select
                name="region"
                value={profile.region || 'US'}
                onChange={handleChange}
                className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option value="US">Sri Lanka</option>
                <option value="EU">India</option>
                <option value="AS">Other</option>
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          {profile.profilePicture && (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="mx-auto w-32 h-32 object-cover rounded-full border-2 border-gray-300 mb-4"
            />
          )}
          <p><strong>Username:</strong> {profile.username || 'Not Set'}</p>
          <p><strong>Email:</strong> {profile.email || 'Not Set'}</p>
          <p><strong>Bio:</strong> {profile.bio || 'Not Set'}</p>
          <p><strong>Language:</strong> {profile.language || 'Not Set'}</p>
          <p><strong>Region:</strong> {profile.region || 'Not Set'}</p>
          <button
            onClick={() => setEditing(true)}
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default Setting;
