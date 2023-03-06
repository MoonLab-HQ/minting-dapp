import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    export default function Mint() {
        return (
            <CrossmintPayButton
                clientId="1d16c0ac-02c0-4dfc-b834-acaf6781cbc1"
                mintConfig={{"type":"erc-721","totalPrice":"0.045"}}
            />
        );
    }