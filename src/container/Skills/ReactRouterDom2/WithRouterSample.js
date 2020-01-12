import React from 'react';
import { withRouter } from 'react-router-dom';


const WithRouterSample = (props) => {
    const { location, match, history } = props;

    return (
        <div>
            <h4>location</h4>        
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />

            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    );
};

// 컴포넌트를 withRouter로 감싼다.
export default withRouter(WithRouterSample);