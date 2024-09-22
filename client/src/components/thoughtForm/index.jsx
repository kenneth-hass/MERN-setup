import { useState } from "react";

import { useMutation} from '@apollo/client';

import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {

    const [formState, setFormState] = useState({
        thoughtText: '',
        thoughtAuthor: ''
    });

const [characterCount, setCharacterCount] = useState(0);

const [addThought, {error}] = useMutation(ADD_THOUGHT, {
    refetchQueries: [

        QUERY_THOUGHTS,
        'getthoughts'
    ]
});

const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {

        const { data } = await addThought({

            variables: {...formState},
        });

        setFormState({
            thoughtText:'',
            thoughtAuthor:'',
        });

    } catch (err) {
        console.error(err);
    }
};

const handleChange = (event) => {

    const { name, value} = event.target;

    if(name === 'thoughtText' && value.length <= 200) {

        setFormState({ ...formState, [name]: value});

        setCharacterCount(value.length);

    } else if (!name === 'thoughtText') {

        setFormState({ ...formState, [name]: value});
    }
};

};


export default ThoughtForm;