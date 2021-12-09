import Layout from '../../components/shared/Layout';
import ContentsLayout from '../../components/shared/ContentsLayout';
import youtubeData from '../../data/youtubeData.json';
import ExploreCard from "../../components/explore/ExploreCard";
import { useState } from 'react';

function Day_12(){
    const [target, setTarget] = useState('');

    function btn_all(){
        setTarget('');
    }
    function btn_BTS(){
        setTarget('BTS');
    }
    function btn_LISA(){
        setTarget('LISA');
    }
    function btn_iphone(){
        setTarget('아이폰');
    }

    return (
        <Layout activeMenu="home">
            <button onClick={btn_all}>전체</button>
            <button onClick={btn_BTS}>BTS</button>
            <button onClick={btn_LISA}>LISA</button>
            <button onClick={btn_iphone}>아이폰</button>
            <ContentsLayout>
                {youtubeData['data'].map(function (data, index) {
                    if(data.title.includes(target)){
                        return <ExploreCard key={`explore-card-${index}`} data={data}/>;
                    }
                })}
            </ContentsLayout>
        </Layout>
    );
}

export default Day_12;