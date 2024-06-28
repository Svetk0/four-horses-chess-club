// ---- RUNNING LINE -----
 const activateRunningBlock = () => {
    const text = 'Дело помощи утопающим — дело рук самих утопающих! &middot Шахматы двигают вперед не только культуру, но и экономику! &middot Лед тронулся, господа присяжные заседатели!';
    const runningBlock = document.querySelectorAll('.running-text');
    console.log('runningBlock', runningBlock);
    runningBlock.forEach((p) => { 
       p.innerHTML = text;
    })
 };
export default activateRunningBlock;