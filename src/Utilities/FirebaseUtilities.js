import Firebase from '../Firebase';

// this function will add the donor to the firebase
export function addDonor(donor) {
  Firebase.firestore().collection('donors').add(donor);
}
// this function will return a promise wihich contain all the data
export async function getDonaor(bloodtpe, city) {
  const database = Firebase.firestore().collection('donors');
  const data = await database
    .where('city', '==', city)
    .where('bloodType', '==', bloodtpe)
    .get()
    .then((data) => {
      const donor = [];
      data.forEach((doc) => {
        donor.push({
          Id: doc.id,
          ...doc.data(),
        });
      });
      return donor;
    });

  return data;
}

