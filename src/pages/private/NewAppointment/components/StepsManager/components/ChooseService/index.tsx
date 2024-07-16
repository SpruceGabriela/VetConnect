import { Grid, RadioGroup, Typography } from "@mui/material";
import FormHeader from "../FormHeader";
import PetAvatar from "../../../Avatar";
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import ServiceCard from "../../../ServiceCard";
import { ChangeEvent } from "react";
import theme from "@/theme";

enum ServiceOption {
  VACCINE = "VACCINE",
  APPOINTMENT = "APPOINTMENT",
}

const servicesOptions = {
  vaccine: {
    title: "Vaccines",
    id: ServiceOption.VACCINE,
    icon: <VaccinesOutlinedIcon />,
    color: theme.palette.tertiary.light
  },
  appointment: {
    title: "Appointments",
    id: ServiceOption.APPOINTMENT,
    icon: <ContentPasteSearchOutlinedIcon />,
    color: theme.palette.error.light
  },
};

interface Props {
  selectedService: string;
  onClickService: (processOption: ServiceOption) => void;
  onChangeSelectedService: (
    event: ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
}

export default function ChooseService({
  selectedService,
  onChangeSelectedService,
  onClickService
}: Props) {
  return (
    <Grid>
      <Grid 
        sx={{
          display: 'flex',
          justifyContent: 'start',
          flexDirection: 'row',
          textAlign: 'start',
          marginBottom: '16px'
        }}
        gap={2}
      >
        <PetAvatar />
        <FormHeader 
          title='Choose the service for'
          subtitle='Nome do pet'
        />
      </Grid>
      <Typography fontSize={20}>
        Services
      </Typography>
      <Grid sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '20px'
      }}>
        <RadioGroup
          aria-label="admission"
          name="type"
          value={selectedService}
          onChange={onChangeSelectedService}
        >
          <ServiceCard 
            icon={servicesOptions.vaccine.icon} 
            title={servicesOptions.vaccine.title} 
            id={servicesOptions.vaccine.id} 
            color={servicesOptions.vaccine.color} 
            onClick={() => onClickService(servicesOptions.vaccine.id)} 
          />
          <ServiceCard 
            icon={servicesOptions.appointment.icon} 
            title={servicesOptions.appointment.title} 
            id={servicesOptions.appointment.id} 
            color={servicesOptions.appointment.color}
            onClick={() => onClickService(servicesOptions.appointment.id)} 
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
}