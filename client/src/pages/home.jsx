import { useQuery } from '@apollo/client';

import ThoughtList 

import ThoughtForm 

import { QUERY_THOUGHTS} from '../utils/queries';

const Home = () => {
    const { loading, data} = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];

    return(
        <main>
            <div className='flex-row justify-center'>
              
                <div className='col-14 col-md-9 mb-3 p-4' style={{border: '1px dotted #1a1a1a'}}>
                    <ThoughtForm />
                </div>

                <div className='col-12 col-md-8 mb-3'>

                    {loading ? (
                        <div>Loading...</div>

                    ) : (
                        <ThoughtList thoughts={thoughts}
                        
                        title="Some Feed For Thought(s)..." />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Home;