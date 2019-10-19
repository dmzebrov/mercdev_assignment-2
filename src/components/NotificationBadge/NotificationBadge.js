import React from 'react';
import './NotificationBadge.css';

import classNames from 'classnames';

function NotificationBadge({ className, children, ...otherProps }) {
  return (
    <div className={classNames("notification-badge", className)} {...otherProps}>
      <p className="notification-badge__number">
        {children}
      </p>
    </div>
  )
}

export default NotificationBadge;