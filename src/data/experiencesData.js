import {default as cookingImg } from "./images/cooking.jpg";
import {default as artImg } from "./images/art.jpg";
import {default as fitnessImg } from "./images/fitness.jpg";
import {default as languageImg } from "./images/language.jpg";
import {default as yogaImg } from "./images/yoga.jpg";

export default [
    {
      id: 1,
      title: "Cooking Masterclass",
      description: "Learn the art of cooking gourmet dishes from professional chefs. Impress your friends and family with your culinary skills.",
      price: 79,
      coverImg: {cookingImg},
      stats: {
        rating: 4.5,
        reviewCount: 50
      },
      location: "USA",
      openSpots: 15
    },
    {
      id: 2,
      title: "Fitness Bootcamp",
      description: "Get fit and stay healthy with our intensive fitness bootcamp. Achieve your fitness goals with expert trainers and a supportive community.",
      price: 199,
      coverImg: {fitnessImg},
      stats: {
        rating: 4.8,
        reviewCount: 40
      },
      location: "Online",
      openSpots: 10
    },
    {
      id: 3,
      title: "Learn a New Language",
      description: "Embark on a linguistic journey and master a new language. Open doors to new cultures and opportunities.",
      price: 149,
      coverImg: {languageImg},
      stats: {
        rating: 4.7,
        reviewCount: 35
      },
      location: "USA",
      openSpots: 20
    },
    {
      id: 4,
      title: "Art Workshop",
      description: "Unleash your creativity through our art workshop. Experiment with various art forms and express yourself through colors and shapes.",
      price: 99,
      coverImg: {artImg},
      stats: {
        rating: 4.6,
        reviewCount: 30
      },
      location: "Online",
      openSpots: 12
    },
    {
      id: 5,
      title: "Yoga and Mindfulness Retreat",
      description: "Reconnect with your inner self through yoga and mindfulness. Find peace, balance, and relaxation in a serene retreat environment.",
      price: 249,
      coverImg: {yogaImg},
      stats: {
        rating: 4.9,
        reviewCount: 25
      },
      location: "USA",
      openSpots: 8
    }
  ];