import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

    

    export default function Mint() {

        return (

            <CrossmintPayButton
 
                clientId="699b1efb-b821-41c0-bd8f-3d7deca42dd0"

                mintConfig={{"type":"erc-721","totalPrice":"0.01","_mintAmount":"1"}}

                environment="staging"

                

            />

        );

    }