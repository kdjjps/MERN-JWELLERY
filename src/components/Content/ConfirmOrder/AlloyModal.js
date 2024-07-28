import React from 'react'
import {ModalBox} from './style'

export default function AlloyModal(props) {
    return (
        <ModalBox status={props.status}>
            <div className="modal">
                <div className="close-modal-cross" onClick={props.modalChange}>
                    <i class="fas fa-times"></i>
                </div>
                <h1>Select Alloy</h1>
                <div className="option-container">
                    <div>
                        <div>
                            <input type="radio" name="alloy" />
                        </div>
                        <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/ring-designs/renesim-solitaerring-basel-weissgold-brillant-rund-0.png" />
                        <p>18k White Gold</p>
                    </div>
                    <div>
                        <p>$300</p>
                    </div>
                </div>
                <div className="option-container">
                    <div>
                        <div>
                            <input type="radio" name="alloy" />
                        </div>
                        <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/ring-designs/renesim-solitaerring-basel-gelbgold-brillant-rund-0.png" />
                        <p>18k Yellow Gold</p>
                    </div>
                    <div>
                        <p>$300</p>
                    </div>
                </div>
                <div className="option-container">
                    <div>
                        <div>
                            <input type="radio" name="alloy" />
                        </div>
                        <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/ring-designs/renesim-solitaerring-basel-rosegold-brillant-rund-0.png" />
                        <p>18k Rose Gold</p>
                    </div>
                    <div>
                        <p>$400</p>
                    </div>
                </div>
                <div className="option-container">
                    <div>
                        <div>
                            <input type="radio" name="alloy" />
                        </div>
                        <img src="https://lgc-static.s3.ap-south-1.amazonaws.com/ring-designs/renesim-solitaerring-basel-platin-brillant-rund-0.png" />
                        <p>Platinum</p>
                    </div>
                    <div>
                        <p>$600</p>
                    </div>
                </div>
            </div>
        </ModalBox>
    )
}
