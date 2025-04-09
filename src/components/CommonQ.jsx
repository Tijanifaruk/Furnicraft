import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const faqs = [
  {
    number: '01',
    question: 'How do I choose the right furniture for living room?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec vel egestas odio, nec dignissim metus. Donec augue elit, 
    rhoncus ac sodales id, porttitor vitae erat.`,
  },
  {
    number: '02',
    question: 'How is your delivery process?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec vel egestas odio, nec dignissim metus. Donec augue elit, 
    rhoncus ac sodales id, porttitor vitae erat.`,
  },
  {
    number: '03',
    question: 'How do I choose the right furniture for living room?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec vel egestas odio, nec dignissim metus. Donec augue elit, 
    rhoncus ac sodales id, porttitor vitae erat.`,
  },
  {
    number: '04',
    question: 'How many weeks does it take to design a furniture order?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec vel egestas odio, nec dignissim metus. Donec augue elit, 
    rhoncus ac sodales id, porttitor vitae erat.`,
  },
  {
    number: '05',
    question: 'How can I contact the customer services?',
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Donec vel egestas odio, nec dignissim metus. Donec augue elit, 
    rhoncus ac sodales id, porttitor vitae erat.`,
  },
];

export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
       <div className='bg-white py-6 text-center text-tertiary '>
        <h1 className='font-bold text-3xl'>Answer to Common Question</h1>
      </div>
      
    <div className='bg-lightestpurple '>
    <div className="max-w-6xl mx-auto  p-6">
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            backgroundColor: expanded === `panel${index}` ? '#f1f1ff' : '#fff',
            borderRadius: '10px',
            boxShadow: 'none',
            mb: 2,
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <CloseIcon className="text-white   rounded-full bg-tertiary" />
              ) : (
                <AddIcon className='text-white  rounded-full bg-tertiary' />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 'bold',
              color: expanded === `panel${index}` ? '#5c4dd6' : '#333',
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: 'bold', mr: 2, color: '#b9b8da' }}
            >
              {faq.number}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          {faq.answer && (
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: '#666' }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
    </div>
    </div>
  );
}
