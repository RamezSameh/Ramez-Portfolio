import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return <div className="page not-found section-pad"><div className="container"><p className="eyebrow"><span className="eyebrow-line" />404 / lost route</p><h1>That page took<br /><span>a wrong turn.</span></h1><Link className="button button-primary" to="/"><ArrowLeft size={16} /> Back home</Link></div></div>;
}
