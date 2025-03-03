import styled from 'styled-components'

const LoaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    // display:${(props) => props.status ? 'flex' : 'none'};
    display: flex;
    width: 100vw;
    height: 100vh;
    background: rgba(30,46,76,0.8);
    justify-content: center;
    align-items: center;
    z-index: 5000;

    svg{
      display: block;
      height: 200px;
      margin: 0 auto;
    }
    .t1 { fill: #AB1F0D; animation: t1 2s ease-in-out infinite; }
    .t2 { fill: #F58D80; animation: t2 2s ease-in-out infinite; }
    .t3 { fill: #F14E39; animation: t3 2s ease-in-out infinite; }
    .t4 { fill: #942819; animation: t4 2s ease-in-out infinite; }
    .t5 { fill: #F56653; animation: t5 2s ease-in-out infinite; }
    .t6 { fill: #D03D2A; animation: t6 2s ease-in-out infinite; }
    .t7 { fill: #F5A298; animation: t7 2s ease-in-out infinite; }
    .t8 { fill: #F5897B; animation: t8 2s ease-in-out infinite; }
    .t9 { fill: #7D2114; animation: t9 2s ease-in-out infinite; }
    @keyframes t1 { 0% { fill: #AB1F0D } 20% { fill: #F86C5A } 40% { fill: #5F0000 } 60% { fill: #AB1F0D } }
    @keyframes t2 { 5% { fill: #F58D80 } 25% { fill: #FFDACD } 45% { fill: #A94134 } 65% { fill: #F58D80 } }
    @keyframes t3 { 10% { fill: #F14E39 } 30% { fill: #FF9B86 } 50% { fill: #A50200 } 70% { fill: #F14E39 } }
    @keyframes t4 { 15% { fill: #942819 } 35% { fill: #E17566 } 55% { fill: #480000 } 75% { fill: #942819 } }
    @keyframes t5 { 20% { fill: #F56653 } 40% { fill: #FFB3A0 } 60% { fill: #A91A07 } 80% { fill: #F56653 } }
    @keyframes t6 { 25% { fill: #D03D2A } 45% { fill: #FF8A77 } 65% { fill: #840000 } 85% { fill: #D03D2A } }
    @keyframes t7 { 30% { fill: #F5A298 } 50% { fill: #FFEFE5 } 60% { fill: #A9564C } 90% { fill: #F5A298 } }
    @keyframes t8 { 35% { fill: #F5897B } 55% { fill: #FFD6C8 } 75% { fill: #A93D2F } 95% { fill: #F5897B } }
    @keyframes t9 { 40% { fill: #7D2114 } 60% { fill: #CA6E61 } 80% { fill: #310000 } 100% { fill: #7D2114 } }

    .b1 { fill: #BB311E; animation: b1 2s ease-in-out infinite; }
    .b2 { fill: #F16553; animation: b2 2s ease-in-out infinite; }
    .b3 { fill: #D63924; animation: b3 2s ease-in-out infinite; }
    .b4 { fill: #F98778; animation: b4 2s ease-in-out infinite; }
    .b5 { fill: #9E2717; animation: b5 2s ease-in-out infinite; }
    @keyframes b1 { 0% { fill: #BB311E } 20% { fill: #FF7E6B } 40% { fill: #6F0000 } 60% { fill: #BB311E } }
    @keyframes b2 { 10% { fill: #F16553 } 30% { fill: #FFB2A0 } 50% { fill: #A51907 } 70% { fill: #F16553 } }
    @keyframes b3 { 20% { fill: #D63924 } 40% { fill: #FF8671 } 60% { fill: #8A0000 } 80% { fill: #D63924 } }
    @keyframes b4 { 30% { fill: #F98778 } 50% { fill: #FFD4C5 } 70% { fill: #AD3B2C } 90% { fill: #F98778 } }
    @keyframes b5 { 40% { fill: #9E2717 } 60% { fill: #EB7464 } 80% { fill: #520000 } 100% { fill: #9E2717 } }

    .overlay { fill: #fff; opacity: .1; animation: overlay 2s ease-in-out infinite; }
    @keyframes overlay { 30% { opacity: 0; fill: #000; } 50% { opacity: .1; } 70% { opacity: 0; } }
`

export default LoaderBox