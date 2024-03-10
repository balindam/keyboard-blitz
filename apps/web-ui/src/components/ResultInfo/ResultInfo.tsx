import React from 'react';
import { resultInfoItems } from '../../constants/constants';
import ResultInfoCard from './ResultInfoCard';
import './ResultInfo.scss';

type Props = {}

const ResultInfo: React.FC<Props> = (props) => {

    const [isShowResult, setIsShowResult] = React.useState<boolean>(true);

    return (
        isShowResult ? (
            <div className="_result-info-container">
                <div className="_ri-heading">
                    Your Result
                </div>
                <div className="_ri-info">
                    {resultInfoItems.map((item, index) => (
                        <ResultInfoCard label={item} value={'0'} key={`${item}-${index}`}/> 
                        ))}
                </div>
            </div>
        ) : null
    );
}

export default ResultInfo;