// This file contains JavaScript functions for managing user interface interactions, such as dropdowns and modals.

document.addEventListener('DOMContentLoaded', () => {
    initializeDropdowns();
    initializeModals();
});

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        toggleButton.addEventListener('click', () => {
            dropdown.classList.toggle('is-active');
        });

        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const selectedValue = item.textContent;
                toggleButton.textContent = selectedValue;
                dropdown.classList.remove('is-active');
            });
        });
    });
}

function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal-trigger');
            const modal = document.getElementById(modalId);
            modal.classList.add('is-active');
        });
    });

    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('is-active');
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('is-active');
            }
        });
    });
}