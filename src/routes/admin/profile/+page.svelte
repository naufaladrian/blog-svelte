<script>
	import Swal from 'sweetalert2';
	import 'sweetalert2/dist/sweetalert2.min.css'; // Import SweetAlert2 styles

	let name = 'John Doe';
	let email = 'johndoe@gmail.com';

	async function changePassword() {
		const { value: formValues } = await Swal.fire({
			title: 'Change Password',
			html: `
          <input type="password" id="oldPassword" class="swal2-input" placeholder="Old Password">
          <input type="password" id="newPassword" class="swal2-input" placeholder="New Password">
          <input type="password" id="confirmPassword" class="swal2-input" placeholder="Confirm New Password">
        `,
			focusConfirm: false,
			preConfirm: () => {
				const oldPassword = Swal.getPopup().querySelector('#oldPassword').value;
				const newPassword = Swal.getPopup().querySelector('#newPassword').value;
				const confirmPassword = Swal.getPopup().querySelector('#confirmPassword').value;

				if (!oldPassword || !newPassword || !confirmPassword) {
					Swal.showValidationMessage(`Please fill out all fields`);
				} else if (newPassword !== confirmPassword) {
					Swal.showValidationMessage(`New password and confirmation do not match`);
				}

				return { oldPassword, newPassword, confirmPassword };
			}
		});

		if (formValues) {
			// Handle the password change here
			console.log(formValues);

			// Example: Show success message
			Swal.fire('Success!', 'Your password has been changed.', 'success');
		}
	}

	async function changeProfile() {
		const { value: formValues } = await Swal.fire({
			title: 'Change Profile',
			html: `
          <input type="text" id="name" class="swal2-input" placeholder="Name" value="${name}">
          <input type="email" id="email" class="swal2-input" placeholder="Email" value="${email}">
        `,
			focusConfirm: false,
			preConfirm: () => {
				const name = Swal.getPopup().querySelector('#name').value;
				const email = Swal.getPopup().querySelector('#email').value;

				if (!name || !email) {
					Swal.showValidationMessage(`Please fill out all fields`);
				}

				return { name, email };
			}
		});

		if (formValues) {
			// Handle the profile change here
			name = formValues.name;
			email = formValues.email;

			// Example: Show success message
			Swal.fire('Success!', 'Your profile has been updated.', 'success');
		}
	}
</script>

<div class="p-4 bg-white rounded-md">
	<h1 class="text-2xl font-semibold">Profile</h1>
	<div class="mt-4">
		<div class="flex items-center">
			<img src="/img/profile.jpg" class="aspect-square object-cover w-[300px]" />
			<div class="ml-4 text-2xl">
				<table>
					<tr>
						<td class="font-semibold">Name</td>
						<td>: {name}</td>
					</tr>
					<tr>
						<td class="font-semibold">Email</td>
						<td class="text-blue-600">: {email}</td>
					</tr>
				</table>
				<button
					class="px-4 py-2 bg-blue-600 text-white font-medium text-lg rounded-md mt-6"
					on:click={changePassword}
				>
					Change Password
				</button>
				<button
					class="px-4 py-2 bg-green-600 text-white font-medium text-lg rounded-md mt-6 ml-2"
					on:click={changeProfile}
				>
					Change Profile
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.swal2-popup {
		font-size: 1.2rem !important;
	}
</style>
