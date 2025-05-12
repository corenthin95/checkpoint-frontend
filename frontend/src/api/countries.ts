import {gql} from "@apollo/client";

export const queryCountries = gql`
    query countries {
        countries {
            id
            name
            emoji
            code
            continent {
                id
                name
            }
        }
    }
`