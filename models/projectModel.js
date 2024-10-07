const { v4: uuidv4 } = require("uuid");
const { collection, addDoc, getDocs, doc } = require( "firebase/firestore");
const db = require( "../firebaseCo.js" );

async function getAllProjects() {
  const projects = await getDocs(collection(db, 'projects'));

  return projects.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

async function createProject(data) {
    const newProject = {
      id: uuidv4(),
      name: data.name,
      description: data.description,
      startDate: data.startDate,
      endDate: data.endDate,
      status: data.status,
      budget: data.budget
    };
    
    const docRef = await addDoc(collection(db, 'projects'), newProject);
    return { id: docRef.id, ...newProject };
}

module.exports = {
  getAllProjects,
  createProject
}