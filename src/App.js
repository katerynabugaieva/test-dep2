import logo from './logo.svg';
import './App.css';
import { Chip, Grid } from "@mui/material"

function App() {
  const skills = ["Compassionate",
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
  return (<>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src="./avatar.png" width="100px" />
      </Grid>
      <Grid item xs={8}>
        <h1>Otto</h1>
        <h3>emotional.support</h3>
        <h4>{resume1}</h4>
      </Grid>
    </Grid>

    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h5>Skills</h5>
        {skills1.map((skill, key) => <Chip label={skill} key={key} />)}
      </Grid>
      <Grid item xs={8}>
        <h5>Employment history</h5>
        {employment.map((job, key) => {
          return (
            <Grid container spacing={2} key={key}>
              <Grid item xs={6}>
                {job.name}
              </Grid>
              <Grid item xs={6}>
                {job.position}
              </Grid>
            </Grid>
          )

          //<Job job={job} key={key} /> 
        })}
      </Grid>
    </Grid>
  </>
  );
}

export default App;
