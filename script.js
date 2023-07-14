document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const publicKeyInput = document.getElementById('publicKey');
    const paymentReferenceInput = document.getElementById('paymentReference');
    const planIdInput = document.getElementById('planId');
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryMonthInput = document.getElementById('expiryMonth');
    const expiryYearInput = document.getElementById('expiryYear');
    const cvvInput = document.getElementById('cvv');
    const amountInput = document.getElementById('amount');
    const currencyInput = document.getElementById('currency');
    const productDescriptionInput = document.getElementById('productDescription');
    const productIdInput = document.getElementById('productId');
    const countryInput = document.getElementById('country');
    const startDateInput = document.getElementById('startDate');
    const cardNameInput = document.getElementById('cardName');
    const billingCycleInput = document.getElementById('billingCycle');
    const allowPartialDebitInput = document.getElementById('allowPartialDebit');
    const emailInput = document.getElementById('email');
    const mobileNumberInput = document.getElementById('mobileNumber');
    const billingPeriodInput = document.getElementById('billingPeriod');
    const subscriptionAmountInput = document.getElementById('subscriptionAmount');

    const publicKey = publicKeyInput.value;
    const paymentReference = paymentReferenceInput.value;
    const planId = planIdInput.value;
    const cardNumber = cardNumberInput.value;
    const expiryMonth = expiryMonthInput.value;
    const expiryYear = expiryYearInput.value;
    const cvv = cvvInput.value;
    const amount = amountInput.value;
    const currency = currencyInput.value;
    const productDescription = productDescriptionInput.value;
    const productId = productIdInput.value;
    const country = countryInput.value;
    const startDate = startDateInput.value;
    const cardName = cardNameInput.value;
    const billingCycle = billingCycleInput.value;
    const allowPartialDebit = allowPartialDebitInput.value;
    const email = emailInput.value;
    const mobileNumber = mobileNumberInput.value;
    const billingPeriod = billingPeriodInput.value;
    const subscriptionAmount = subscriptionAmountInput.value;

    const requestBody = {
        publicKey: publicKey,
        paymentReference: paymentReference,
        planId: planId,
        cardNumber: cardNumber,
        expiryMonth: expiryMonth,
        expiryYear: expiryYear,
        cvv: cvv,
        amount: amount,
        currency: currency,
        productDescription: productDescription,
        productId: productId,
        country: country,
        startDate: startDate,
        cardName: cardName,
        billingCycle: billingCycle,
        allowPartialDebit: allowPartialDebit,
        email: email,
        mobileNumber: mobileNumber,
        billingPeriod: billingPeriod,
        subscriptionAmount: subscriptionAmount
    };fetch('https://seerbitapi.com/api/v2/recurring/subscribes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to create subscription');
            }
        })
        .then(function (data) {
            console.log('Subscription created:', data);
        })
        .catch(function (error) {
            console.error('Error creating subscription:', error);
        });
});