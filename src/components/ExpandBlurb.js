import React, { useState } from 'react'; 
import ReactDOM from 'react-dom';
import { Button, Collapse } from 'react-bootstrap';

function ExpandBlurb() {
    const [open, setOpen] = useState(false);
  
    return (
      <div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="additional-text"
          aria-expanded={open}
        >
          Read more
        </Button>
        <Collapse in={open}>
          <div id="blurb-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </div>
    );
  }

  export default ExpandBlurb;
  