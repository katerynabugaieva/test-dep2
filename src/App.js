import './App.css';
import { Chip, Grid } from "@mui/material"

function App() {
  const skills1 = ["Passionate",
    "Empathetic",
    "Intuitive",
    "Comforting",
    "Trustworthy",
    "Patient"]

  const skills2 = [
    "Attentive",
    "Empathetic",
    "Calming",
    "Responsive",
    "Patient"]

  const employment = [{
    name: "Private Residence",
    position: "A good boy",
    date: "Oct 2020 - present",
    description: "Provided emotional support and companionship to an individual experiencing anxiety and depression on a daily basis.Implemented calming techniques and remained available for comfort during periods of distress."

  }, {
    name: "Mental Health Clinic",
    date: "Jul 2020 - Oct 2020",
    position: "A good boy",
    description: "Collaborated with mental health professionals to assist clients during therapy sessions.Offered a soothing presence and facilitated emotional regulation for individuals with various mental health challenges."

  }, {
    name: "University Counseling Center",
    date: "Jun 20219 - Jul 2020",
    position: "A good boy",
    description: "Offered support and comfort to students dealing with stress, homesickness, and academic pressure.Participated in therapy sessions and campus events aimed at promoting emotional well - being and stress management."
  }]


  const employment2 = [{
    name: "Elementary School",
    position: "A good boy",
    date: "Oct 2020 - present",
    description: "Assisted as an emotional support animal in a classroom setting, providing comfort and companionship to young students facing academic challenges or emotional distress. Supported teachers in creating a positive and inclusive learning environment."

  }, {
    name: "Senior Living Community",
    date: "Jul 2020 - Oct 2020",
    position: "A good boy",
    description: " Offered emotional support to residents in a senior living community, providing companionship and comfort to individuals experiencing loneliness or emotional difficulties. Participated in recreational activities and social interactions, contributing to the residents' overall well-being."

  }, {
    name: "Homeless Shelter",
    date: "Jun 20219 - Jul 2020",
    position: "A good boy",
    description: "Provided emotional support and comfort to individuals staying at a homeless shelter, offering a sense of companionship and stability during challenging times. Assisted shelter staff in creating a welcoming and supportive environment for residents seeking assistance and shelter."
  }]

  const resume1 = "Dedicated Emotional Support Animal offering unwavering companionship and comfort to individuals experiencing emotional or psychological distress."
  const resume2 = "Skilled in fostering a calming and reassuring presence, contributing to improved mental well-being and emotional stability."

  console.log(resume2)
  console.log(employment2)
  console.log(skills2)
  return (<>
  <div style={{padding:'4em 1em'}}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src="./avatar.png" width="100%" alt="it is otto"/>
      </Grid>
      <Grid item xs={8}>
        <h1>Otto</h1>
        <h3>emotional.support</h3>
        <h6>{resume1}</h6>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h4>Skills</h4>
        {skills1.map((skill, key) => <Chip label={skill} key={key} />)}

        <h4>Education</h4>
        <h6>The school of Good boys and Girls, 2019</h6>

        <h4>Contacts</h4>
        <h6>No need to call, I am always here for you</h6>
      </Grid>
      <Grid item xs={8}>
        <h4>Employment history</h4>
        {employment.map((job, key) => {
          return (
            <Grid container spacing={1} key={key} >
              <Grid item xs={6}>
                <h5>{job.name}</h5>
                <h6>{job.position}</h6>
              </Grid>
              <Grid item xs={6} display={'grid'}>
                <h6 style={{marginLeft:'auto'}}>{job.date}</h6>
              </Grid>
              <Grid item xs={12} >
                {job.description}
              </Grid>
            </Grid>
            
          )
        })}
      </Grid>
    
    </Grid>
    </div>
  </>
  );
}

export default App;
