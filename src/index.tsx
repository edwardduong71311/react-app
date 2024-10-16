import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
// import WorkShop2 from "./Workshop2";
import AppLab11 from "./AppLab11";
// import WorkShop1 from "./WorkShop1";
// import AppLab8 from "./AppLab8";
// import CommentContextProvider from "./context/CommentContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        {/*<CommentContextProvider>*/}
        {/*    <AppLab8 />*/}
        {/*</CommentContextProvider>*/}
        {/*<WorkShop1 />*/}
        {/*<WorkShop2 />*/}
        <AppLab11 />
    </StrictMode>
);

