
function saveChanges() {
  // Implement save changes functionality
  alert('Changes saved!');
  // Close the modal after saving
  const modal = bootstrap.Modal.getInstance(document.getElementById('editModal'));
  modal.hide();
}





const orders = {
  'to-ship': [
      { id: 12345, product: 'Wireless Mouse', status: 'Waiting to be shipped' },
      { id: 67890, product: 'Gaming Keyboard', status: 'Waiting to be shipped' }
  ],
  'to-receive': [
      { id: 54321, product: 'Laptop Stand', status: 'On its way' },
      { id: 98765, product: 'HD Monitor', status: 'On its way' }
  ],
  'completed': [
      { id: 11223, product: 'USB Hub', status: 'Delivered' },
      { id: 99887, product: 'Bluetooth Speaker', status: 'Delivered' }
  ]
};

function showOrders(status) {
  // Update active button
  document.querySelectorAll('.order-status-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.classList.add('inactive');
  });
  event.target.classList.add('active');
  event.target.classList.remove('inactive');

  // Update order details
  const orderDetails = document.getElementById('order-details');
  orderDetails.innerHTML = ''; // Clear current orders

  orders[status].forEach(order => {
      const orderCard = `
          <div class="order-card">
              <h5>Order #${order.id}</h5>
              <p>Product: ${order.product}</p>
              <p>Status: ${order.status}</p>
          </div>
      `;
      orderDetails.innerHTML += orderCard;
  });
}

// Function to toggle the sidebar visibility
document.getElementById('toggleSidebar').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('visible');
  const contentArea = document.querySelector('.content-area');
  contentArea.classList.toggle('collapsed');
});

// Function to close the sidebar
document.getElementById('closeSidebar').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  const contentArea = document.querySelector('.content-area');
  sidebar.classList.remove('visible');
  contentArea.classList.add('collapsed');
});




 // Handle the logout link click
 document.getElementById('logout-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default action
  var logoutModal = new bootstrap.Modal(document.getElementById('logoutModal')); // Initialize Bootstrap modal
  logoutModal.show(); // Show the modal
});

// Handle the "Yes" button click in the modal
document.getElementById('confirm-logout').addEventListener('click', function() {
  // Perform the logout action here, e.g., redirect to the logout URL
  window.location.href = 'login.html'; // Replace with actual logout URL
});