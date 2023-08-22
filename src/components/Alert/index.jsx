import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { alertService, AlertType } from '../../_services';
// import { history } from '../../_helpers';

const propTypes = {
    id: PropTypes.string,
    fade: PropTypes.bool
};

const defaultProps = {
    id: 'default-alert',
    fade: true
};

function Alert({ id, fade }) {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // subscribe to new alert notifications
        const subscription = alertService.onAlert(id)
            .subscribe(alert => {
                // clear alerts when an empty alert is received
                if (!alert.message) {
                    setAlerts(alerts => {
                        // filter out alerts without 'keepAfterRouteChange' flag
                        const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange);

                        // remove 'keepAfterRouteChange' flag on the rest
                        filteredAlerts.forEach(x => delete x.keepAfterRouteChange);
                        return filteredAlerts;
                    });
                } else {
                    // add alert to array
                    setAlerts(alerts => ([...alerts, alert]));

                    // auto close alert if required
                    if (alert.autoClose) {
                        setTimeout(() => removeAlert(alert), 3000);
                    }
                }
            });

        // clear alerts on location change
        // const historyUnlisten = history.listen(({ pathname }) => {
        //     // don't clear if pathname has trailing slash because this will be auto redirected again
        //     if (pathname.endsWith('/')) return;

        //     alertService.clear(id);
        // });

        // clean up function that runs when the component unmounts
        return () => {
            // unsubscribe & unlisten to avoid memory leaks
            subscription.unsubscribe();
            // historyUnlisten();
        };
    }, []);

    function removeAlert(alert) {
        if (fade) {
            // fade out alert
            const alertWithFade = { ...alert, fade: true };
            setAlerts(alerts => alerts.map(x => x === alert ? alertWithFade : x));

            // remove alert after faded out
            setTimeout(() => {
                setAlerts(alerts => alerts.filter(x => x !== alertWithFade));
            }, 250);
        } else {
            // remove alert
            setAlerts(alerts => alerts.filter(x => x !== alert));
        }
    }

    function cssClasses(alert) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];

        const alertTypeClass = {
            [AlertType.Success]: 'p-4 mb-4 text-sm text-green-50 rounded-lg bg-green-500 dark:bg-gray-800 dark:text-green-400',
            [AlertType.Error]: 'p-4 mb-4 text-sm text-red-50 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400',
            [AlertType.Info]: 'p-4 mb-4 text-sm text-blue-50 rounded-lg bg-blue-500 dark:bg-gray-800 dark:text-blue-400',
            [AlertType.Warning]: 'p-4 text-sm text-gray-50 rounded-lg bg-gray-500 dark:bg-gray-800 dark:text-gray-300'
        }

        classes.push(alertTypeClass[alert.type]);

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }

    if (!alerts.length) return null;

    return (
        <div className="fixed bottom-0 right-0 z-50 animate-bounce">
            <div className="m-3">
                {alerts.map((alert, index) =>
                    <div key={index} className={cssClasses(alert)}>
                        <a className="close mr-2" onClick={() => removeAlert(alert)}>&times;</a>
                        <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
                    </div>
                )}
            </div>
        </div>
    );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export { Alert };