
import { Container,Grid } from "@mui/material";  
import CelebrationIcon from '@mui/icons-material/Celebration'; 

const Similarities = (props) => { 
    return (
        <Container>
             <Grid container spacing={2}>
             <Grid container spacing={2}>
                <Grid item xs={4}>
                     <CelebrationIcon /> 
                </Grid>
                <Grid item xs={8}>
                   
                    <h4>Adverse effect & Contraindications</h4> 
                </Grid> 
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                     <CelebrationIcon /> 
                </Grid>
                <Grid item xs={8}>
                    
                    <h4>Adverse effect & Contraindications</h4>
                     
                </Grid> 
            </Grid>
            </Grid>
            </Container>
    );
}

 

export default Similarities;