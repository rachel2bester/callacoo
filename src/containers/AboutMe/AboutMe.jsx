import React from "react";
import Nav from "./../Nav/Nav";
import MenuPopup from "../MenuPopup/MenuPopup";
import "./AboutMe.scss";
import Header from "../Header/Header";

const AboutMe = (props) => {
    const { toggleDisplayPopUp, displayPopUp } = props;

    return (
        <div className="about-me">
            
            <Header displayPopUp={displayPopUp} toggleDisplayPopUp={toggleDisplayPopUp}/>
            <div className="about-me__content">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu
                facilisis sed odio morbi quis commodo odio aenean sed. Parturient
                montes nascetur ridiculus mus. Massa tincidunt dui ut ornare lectus
                sit amet est placerat. Elit eget gravida cum sociis natoque penatibus
                et magnis. Commodo elit at imperdiet dui accumsan sit amet nulla
                facilisi. Sagittis id consectetur purus ut faucibus pulvinar.
                Adipiscing elit duis tristique sollicitudin nibh sit amet commodo
                nulla. Integer quis auctor elit sed vulputate. Lacus sed turpis
                tincidunt id aliquet risus feugiat in. Et ultrices neque ornare aenean
                euismod elementum nisi. Dignissim cras tincidunt lobortis feugiat
                vivamus at. Iaculis at erat pellentesque adipiscing. Tortor vitae
                purus faucibus ornare suspendisse sed. Etiam erat velit scelerisque in
                dictum. Sit amet est placerat in egestas erat imperdiet. Leo urna
                molestie at elementum. Consequat semper viverra nam libero justo
                laoreet. Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam. Pharetra massa massa ultricies mi quis hendrerit dolor.
                Ornare arcu odio ut sem nulla pharetra. Elementum pulvinar etiam non
                quam lacus suspendisse faucibus. Gravida dictum fusce ut placerat orci
                nulla pellentesque. Velit egestas dui id ornare arcu. Est placerat in
                egestas erat imperdiet sed euismod nisi porta. Ullamcorper dignissim
                cras tincidunt lobortis feugiat vivamus at augue eget. Feugiat vivamus
                at augue eget arcu dictum. Tristique senectus et netus et malesuada
                fames ac turpis egestas. Lorem sed risus ultricies tristique nulla
                aliquet enim tortor at. Consectetur libero id faucibus nisl tincidunt
                eget nullam non. Lorem ipsum dolor sit amet consectetur. Sem et tortor
                consequat id porta nibh venenatis cras sed. Metus aliquam eleifend mi
                in nulla posuere. Scelerisque in dictum non consectetur a erat nam at.
                In hac habitasse platea dictumst vestibulum rhoncus. Pharetra vel
                turpis nunc eget lorem. Condimentum id venenatis a condimentum vitae
                sapien. Aliquet eget sit amet tellus cras. Nisi lacus sed viverra
                tellus in hac habitasse. Eu nisl nunc mi ipsum faucibus. Pellentesque
                pulvinar pellentesque habitant morbi tristique senectus et. Mauris
                augue neque gravida in fermentum et. At varius vel pharetra vel turpis
                nunc eget lorem. Orci porta non pulvinar neque laoreet. Malesuada
                fames ac turpis egestas sed. Sed odio morbi quis commodo. Quis lectus
                nulla at volutpat diam ut venenatis tellus in. Facilisis magna etiam
                tempor orci eu lobortis. Nibh tellus molestie nunc non blandit massa.
                Integer quis auctor elit sed vulputate mi sit amet. Malesuada proin
                libero nunc consequat interdum varius sit amet mattis. Aliquet eget
                sit amet tellus cras. Massa tincidunt nunc pulvinar sapien et ligula
                ullamcorper. Varius sit amet mattis vulputate enim nulla. Eu nisl nunc
                mi ipsum faucibus vitae aliquet nec ullamcorper. Vestibulum rhoncus
                est pellentesque elit ullamcorper. Tempus egestas sed sed risus. Nec
                dui nunc mattis enim. Eu tincidunt tortor aliquam nulla. Viverra
                aliquet eget sit amet tellus cras adipiscing enim eu. Aliquet bibendum
                enim facilisis gravida neque convallis. Dui sapien eget mi proin sed
                libero enim sed faucibus. Purus semper eget duis at tellus at urna
                condimentum. Egestas pretium aenean pharetra magna ac. Sed viverra
                ipsum nunc aliquet bibendum. Elit pellentesque habitant morbi
                tristique senectus. Egestas integer eget aliquet nibh praesent. Eu
                volutpat odio facilisis mauris sit amet massa vitae tortor. Quis
                imperdiet massa tincidunt nunc pulvinar sapien et ligula. Ultricies
                tristique nulla aliquet enim tortor at.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
