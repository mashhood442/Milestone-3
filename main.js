document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const remarksInput = document.getElementById('remarks');
    const degreeInput = document.getElementById('degree');
    const institutionInput = document.getElementById('institution');
    const educationDurationInput = document.getElementById('education-duration');
    const additionalQualificationsInput = document.getElementById('additional-qualifications');
    const companyInput = document.getElementById('company');
    const positionInput = document.getElementById('position');
    const workDurationInput = document.getElementById('work-duration');
    const workAdditionInput = document.getElementById('work-addition');
    if (nameInput && emailInput && phoneInput && remarksInput && degreeInput && institutionInput && educationDurationInput && additionalQualificationsInput && companyInput && positionInput && workDurationInput && workAdditionInput) {
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const remarks = remarksInput.value;
        const degree = degreeInput.value;
        const institution = institutionInput.value;
        const educationDuration = educationDurationInput.value;
        const additionalQualifications = additionalQualificationsInput.value;
        const company = companyInput.value;
        const position = positionInput.value;
        const workDuration = workDurationInput.value;
        const workAddition = workAdditionInput.value;
        document.getElementById('display-name').innerText = name;
        document.getElementById('display-email').innerText = email;
        document.getElementById('display-phone').innerText = phone;
        document.getElementById('display-remarks').innerText = remarks;
        document.getElementById('display-degree').innerText = degree;
        document.getElementById('display-institution').innerText = institution;
        document.getElementById('display-education-duration').innerText = educationDuration;
        document.getElementById('display-additional-qualifications').innerText = additionalQualifications;
        document.getElementById('display-company').innerText = company;
        document.getElementById('display-position').innerText = position;
        document.getElementById('display-work-duration').innerText = workDuration;
        document.getElementById('display-work-addition').innerText = workAddition;
    }
});
export {};