function selectOption(option) {
    document.querySelectorAll('.payment-option').forEach(el => el.classList.remove('selected'));
    option.classList.add('selected');
}
