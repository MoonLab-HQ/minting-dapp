import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    export default function Mint() {
        return (
            <CrossmintPayButton
                clientId="23ec6dc0-770e-4a61-b818-178733f4e67d"
                mintConfig={{"type":"erc-721","totalPrice":"0.045"}}
            />
        );
    }