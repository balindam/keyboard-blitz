import React from 'react';
import './style.scss';

type Props = {}

const PreviousTestResults = (props: Props) => {

    const previousTestResults = [{
        testId: '1',
        testName: 'Test 1',
        testTimestamp: '2021-01-01 00:00:00',
        testResult: '120'
    },
    {
        testId: '1',
        testName: 'Test 1',
        testTimestamp: '2021-01-01 00:00:00',
        testResult: '120'
    }
]

  return (
    <div className="_previous-test-results-container">
        <div className="_ptr-heading">
            Previous Test Results
        </div>
        <div className="_ptr-body">
            {previousTestResults.map((test, index) => (
                <div className="_ptr-item" key={`${test.testId}-${index}`}>
                    <div className="_ptr-item-name">
                        {test.testName}
                    </div>
                    <div className="_ptr-item-timestamp">
                        {test.testTimestamp}
                    </div>
                    <div className="_ptr-item-result">
                        {`${test.testResult} WPM`}
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default PreviousTestResults