/* 제일 처음으로 실행되는 파일 */
import ReactDOM from 'react-dom/client';

import './index.css';  /* 일반적으로 css코드는 JS에 가져올 수 없음 */
import App from './App'; /* js 파일은 .js를 쓰지 않음 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);