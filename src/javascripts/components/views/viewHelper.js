import auth from '../auth/auth';
import menuView from './menuView';
import reservationView from './reservationView';
import staffView from './staffView';
import addStaffForm from '../forms/addStaffMember';

const viewHelper = (id) => {
  switch (id) {
    // targeting nav link id, returning respective link view
    case 'menuLink':
      return menuView.menuView();
    case 'reservationLink':
      return reservationView.reservationView();
    // case 'staffLink':
    //   return staffView.staffView();
      // return staffView.staffViewConditional(user);
    // case 'staffLink':
    //   return staffView.staffViewConditional(user);
    // case 'userStaffView':
    //   return staffView.userStaffView();
    case 'home':
      return console.warn('homeView');
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);

  // targeting nav link id on click event to print nav link respective view
  // $('body').on('click', 'a.nav-link', (e) => {
  //   e.stopImmediatePropagation();
  //   viewHelper(e.currentTarget.id, user);
  // });

  // $('body').on('click', 'a.nav-link', (e) => {
  //   e.stopImmediatePropagation();
  //   if (user) {
  //     viewHelper(e.currentTarget.id, user);
  //   } else {
  //     staffView.staffView();
  //   }
  // });

  $('body').on('click', '#staffLink', (e) => {
    e.stopImmediatePropagation();
    staffView.staffView();
    staffView.userStaffView();
  });

  // $('body').on('click', '#staffLink', (e) => {
  //   e.stopImmediatePropagation();
  //   console.warn('clicked', e.currentTarget.id);
  //   if (user) {
  //     viewHelper('userStaffView', user);
  //     // staffView.userStaffView();
  //   } else {
  //     // viewHelper('staffLink');
  //     staffView.staffView();
  //   }
  // });

  $('body').on('click', '.userLinkLogout', () => {
    auth.logoutButton();
  });
  $('body').on('click', '.userLinkLogin', () => {
    auth.loginButton();
  });

  $('body').on('click', '.staff-form-btn', (e) => {
    e.stopImmediatePropagation();
    console.warn('clicked');
    // $('.staff-form-btn').remove();
    // $('.staff-member-container').remove();
    // $('#app').css('background-color', '#262626');
    addStaffForm.addStaffMemberForm();
  });
};

export default { viewListener, viewHelper };
