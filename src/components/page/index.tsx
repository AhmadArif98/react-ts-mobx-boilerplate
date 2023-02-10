import {observer} from 'mobx-react-lite';
import {useStore} from '../store/root-store';
import {Button} from 'antd';

export const MainComponent = observer(() => {
    const {mainCounter, setMainCounter, subStore: {setSubStoreCounter, subStoreCounter}} = useStore('');
    return (<>
     <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <h3>Root Store: </h3>
            <Button onClick={() => setMainCounter(mainCounter - 1)} type='primary'>-</Button>
            <h3>{mainCounter}</h3>
            <Button onClick={() => setMainCounter(mainCounter + 1)} type='primary'>+</Button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <h3>Sub Store: </h3>
            <Button onClick={() => setSubStoreCounter(subStoreCounter - 1)} type='primary'>-</Button>
            <h3>{subStoreCounter}</h3>
            <Button onClick={() => setSubStoreCounter(subStoreCounter + 1)} type='primary'>+</Button>
        </div>
    </>
       
    )
})