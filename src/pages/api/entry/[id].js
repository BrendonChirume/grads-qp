import { db } from '../../../firebase/firebase';

const getID = async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      await db
        .collection('entries')
        .doc(id)
        .update({
          ...req.body,
          updated: new Date().toISOString()
        });
    } else if (req.method === 'GET') {
      const doc = await db.collection('entries').doc(id).get();
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    } else if (req.method === 'DELETE') {
      await db.collection('entries').doc(id).delete();
    }
  } catch (e) {
    console.log(e);
  }
};

export default getID;
