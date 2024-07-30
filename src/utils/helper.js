export function generateRandomNameAndMessage() {
  // Array of possible names
  const names = [
    "Chetan Malpure",
    "Alice Johnson",
    "Bob Smith",
    "Emma Davis",
    "John Doe",
    "Jane Doe",
    "Michael Brown",
    "Emily Wilson",
    "David Clark",
    "Sophia Adams",
    "Daniel Lee",
    "Isabella Taylor",
    "James Anderson",
    "Olivia Thomas",
    "William Martinez",
    "Ava Garcia",
    "Benjamin Hernandez",
    "Mia Robinson",
    "Jacob Walker",
    "Charlotte Lewis",
    "Ethan Hall",
    "Amelia Young",
    // Add more names as needed
  ];

  // Array of possible messages
  const messages = [
    "Hello World!",
    "Goodbye World!",
    "How are you?",
    "Have a great day!",
    "Stay positive!",
    "Keep smiling!",
    "Have a wonderful day!",
    "See you soon!",
    "Take care!",
    "You are amazing!",
    "Keep up the good work!",
    "Wishing you all the best!",
    "Hope you're doing well!",
    "You're doing great!",
    "Just wanted to say hi!",
    "Sending positive vibes your way!",
    // Add more messages as needed
  ];

  // Function to get a random item from an array
  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  // Generate random name and message
  const name = getRandomItem(names);
  const message = getRandomItem(messages);

  return { name, message };
}

export function viewCountFormat(num) {
  if (!num) return 20 + "K";
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString(); // For numbers less than 1,000
  }
}

export function timeAgo(inputTimeStr) {
  // Parse the input time string into a Date object
  const inputTime = new Date(inputTimeStr);

  // Get the current time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = now - inputTime;

  // Convert milliseconds to seconds
  const diffInSec = Math.floor(diffInMs / 1000);

  // Convert seconds to minutes, hours, days, and months
  const diffInMin = Math.floor(diffInSec / 60);
  const diffInHour = Math.floor(diffInMin / 60);
  const diffInDay = Math.floor(diffInHour / 24);
  const diffInMonth = Math.floor(diffInDay / 30); // Approximate average month length
  const diffInYear = Math.floor(diffInMonth / 12);

  // Return the appropriate time difference string
  if (diffInYear > 0) {
    return `${diffInYear} year${diffInYear > 1 ? "s" : ""} ago`;
  } else if (diffInMonth > 0) {
    return `${diffInMonth} month${diffInMonth > 1 ? "s" : ""} ago`;
  } else if (diffInDay > 0) {
    return `${diffInDay} day${diffInDay > 1 ? "s" : ""} ago`;
  } else if (diffInHour > 0) {
    return `${diffInHour} hour${diffInHour > 1 ? "s" : ""} ago`;
  } else if (diffInMin > 0) {
    return `${diffInMin} minute${diffInMin > 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
}
