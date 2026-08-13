function createLoginTracker(userInfo) {
  let attempts = 0;
  const maxAttempts = 3;
  let locked = false;

  const attemptLogin = (password) => {
    if (locked) {
      return `Account for ${userInfo.username} is locked. Too many failed attempts.`;
    }

    if (password === userInfo.password) {
      attempts = 0;
      return `Login successful. Welcome, ${userInfo.username}!`;
    }

    attempts++;
    const remaining = maxAttempts - attempts;

    if (attempts >= maxAttempts) {
      locked = true;
      return `Incorrect password. Account locked after ${maxAttempts} failed attempts.`;
    }

    return `Incorrect password. ${remaining} attempt(s) remaining.`;
  };

  return attemptLogin;
}

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

