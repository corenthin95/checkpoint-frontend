import {gql} from "@apollo/client";

export const queryCountry = gql`
    query country($code: String!) {
        country(code: $code) {
            code
            continent {
                id
                name
            }
            emoji
            id
            name
        }
    }

`