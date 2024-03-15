
import Chance from 'chance';
import User from '../models/userModels.js'; // Make sure to import your User model




// Function to generate seed data
const generateSeedData = async (numUsers) => {
  console.log("ok buddy..!")

  const chance = new Chance()

  
  try {
    // Clear existing data
    await User.deleteMany({}).maxTimeMS(30000); // Increase timeout to 30 seconds


    // Generate and insert new data
    const users = [];
    for (let i = 0; i < numUsers; i++) {
      const newUser = {
                name: chance.name(),
                email: chance.email(),
                password: chance.string({ length: 8, alpha: true, numeric: true }) 
      };
      users.push(newUser);
    }
    await User.insertMany(users);
    console.log(`${numUsers} users seeded successfully.`);
   
  } catch (error) {
    console.error('Error seeding data:', error);
  
  }
};

export default generateSeedData;
// Adjust the number of users you want to generate
