'use client';
import { useState } from 'react';

export default function BottoneDebug({ onSendData }) {

    const [data, setData] = useState(null);

    async function handleClick() {
        const response = await fetch("https://metroquadro-backend-production.up.railway.app/api/collections/immobili_vendita/records?page=1&perPage=30&filter=(comune='Mantova')");
        const data = await response.json();
        setData(data);
        onSendData('Dati dal componente figlio');
    }

    return (
        <div onClick={() => handleClick()} style={{ padding: "10px", backgroundColor: "var(--mqGreen)" }}>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    )


}