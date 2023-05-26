import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from 'react-bootstrap/Button';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div>
  <h1>
    Example heading{' '}
    <Badge bg="secondary" as="Button">
      New
    </Badge>
    <Button variant="primary">Primary</Button>
  </h1>
</div>
  </React.StrictMode>,
)
