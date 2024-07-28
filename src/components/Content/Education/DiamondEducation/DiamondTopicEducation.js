import React from 'react'
import Anatomy from './DiamondAnatomy'
import Carat from './DiamondCarat'
import Certification from './DiamondCertification'
import Clarity from './DiamondClarity'
import Color from './DiamondColor'
import Cut from './DiamondCut'
import Fluorescence from './DiamondFluorescence'
import Shapes from './DiamondShapes'
import {useParams, useRouteMatch} from 'react-router-dom'

export default function DiamondTopicEducation() {
    
    let diamondTopicComponent
    let {url} = useRouteMatch()
    let {topicID} = useParams()

    switch(topicID){
        case 'anatomy':
            diamondTopicComponent = <Anatomy />
            break;
        case 'carat':
            diamondTopicComponent = <Carat />
            break;
        case 'certification':
            diamondTopicComponent = <Certification />
            break;
        case 'clarity':
            diamondTopicComponent = <Clarity />
            break;
        case 'color':
            diamondTopicComponent = <Color />
            break;
        case 'cut':
            diamondTopicComponent = <Cut />
            break;
        case 'fluorescence':
            diamondTopicComponent = <Fluorescence />
            break;
        case 'shapes':
            diamondTopicComponent = <Shapes />
            break;
    }

    return (
        <div>
            {diamondTopicComponent}
        </div>
    )
}