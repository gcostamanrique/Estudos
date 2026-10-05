
const button = document.querySelector('button[id="add"]') as HTMLElement;
const accsessRadio = document.getElementById('accessRadio') as HTMLElement;

button.addEventListener('click', addEmployee);

enum accessOptions {
    administrator = 'Administrador',
    manager = 'Gerente',
    employee = 'Colaborador'
}

const accessOptionsValues = Object.values(accessOptions) as Array<accessOptions>;

accessOptionsValues.forEach((value: string, i: number): void => {
    accsessRadio.innerHTML += `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="access" id="accessRadio${i}" value="${value}">
            <label class="form-check-label" for="access">
                ${value}
            </label>
        </div>
    `
});

function addEmployee(): void {
    const content = document.getElementById('content') as HTMLElement;

    let fullName = document.querySelector('#fullName') as HTMLInputElement;

    let register = document.querySelector('#register') as HTMLInputElement;

    let active = document.querySelector('#active') as HTMLInputElement;

    let admin = document.querySelector('input[name="access"]:checked') as HTMLInputElement | null;

    let adminValue = admin ? admin.value : 'não';

    content.innerHTML += <string>createLine(fullName.value, +register.value, adminValue, active.checked);
}

function createLine(fullName: string, NrRegister: string | number, admin: string, active: boolean): string {
    return `
    <div class="card mb-1">
        <div class="card-header">
            ${NrRegister}
        </div>
        <div class="card-body">
            <h5 class="card-title">${fullName}</h5>
            <a href="#" class="btn btn-primary">${active ? "Ativo" : "Inativo"}</a>
        </div>
        <div class="card-footer bg-trabsparent border-success">
            Acesso: ${admin}
        </div>
    </div>
    `;
}
