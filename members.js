// usersData.js
const members = [
    { 
        id: 1,  
        name: 'Gururaj Kulkarni',
        age: 26,
        address: {
            street: '123 Main Street',
            city: 'City',
            country: 'Country',
            postalCode: '12345'
        },
        contact: {
            email: 'gururaj@example.com',
            phone: '+1234567890',
            social: {
                twitter: 'gururaj_twitter',
                linkedin: 'gururaj_linkedin'
            }
        },
        hobbies: ['Coding', 'Hiking', 'Photography']
    },
    { 
        id: 2,  
        name: 'Deepak Kulkarni', 
        age: 28,
        address: {
            street: '456 Oak Avenue',
            city: 'Town',
            country: 'Country',
            postalCode: '67890'
        },
        contact: {
            email: 'deepak@example.com',
            phone: '+1987654321',
            social: {
                twitter: 'deepak_twitter',
                linkedin: 'deepak_linkedin'
            }
        },
        hobbies: ['Reading', 'Traveling', 'Cooking']
    },
    // Add more users with address, contact, and hobbies as needed
];

module.exports = members;
