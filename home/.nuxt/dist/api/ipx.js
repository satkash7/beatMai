import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Applications/XAMPP/xamppfiles/htdocs/beatMai/home/static","domains":["*"],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
