
const button = document.querySelector('button[id="add"]') as HTMLElement;

button.addEventListener('click', addEmployee);

function addEmployee(): void {
    const content = document.getElementById('content') as HTMLElement;

    let fullName = document.querySelector('#fullName') as HTMLInputElement;

    let register = document.querySelector('#register') as HTMLInputElement;

    let active = document.querySelector('#active') as HTMLInputElement;

    let admin = document.querySelector('input[name="admin"]:checked') as HTMLInputElement | null;

    let adminValue = admin ? admin.value : 'não';

    content.innerHTML += <string>createLine(fullName.value, +register.value, adminValue, active.checked);
}

function createLine(fullName: string, NrRegister: string | number, admin: string, active: boolean): string {
    return `<br>${fullName}<br>${NrRegister}<br>${admin}<br>${active}<br>`;
}