import {Fragment} from 'react';
export function Invitation(props){
    const {invite, id, name, party, names, venue}=props;
    return (
        <Fragment>
            <body>
            <p>Subject: {invite}<br/>To: {id}<br/><br/>Hi, {name}</p>
            <p> I am having a {party} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - {names}
            </p>
            <p>My house is behind our school , near {venue}</p>
            <p>  I hope you will come and see you soon <br/>from ,<br/>{name}</p>
            </body>

        </Fragment>
    )
}