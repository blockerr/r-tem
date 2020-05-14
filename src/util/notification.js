import { notification } from 'antd';

export const errorNotification = (placement, msg) => {
  for ( let i = 0 ; i < msg.length; i++){
    notification.error({
      message: msg[i].error,
      placement
    });
  }
};

export const successNotification = (placement) => {
    notification.success({
      message: 'Thao tác thành công',
      placement
    });
};