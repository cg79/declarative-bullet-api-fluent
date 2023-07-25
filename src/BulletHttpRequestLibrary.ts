import axios, { AxiosRequestConfig } from 'axios';
import { CustomHttpResponse } from './CustomHttpResponse';
import {
  BulletAuthentication,
  BULLET_ROUTE,
  ChangePasswordRequest,
  ConfirmUserRequest,
  CreateUserRequest,
  DeltaFunctionRequest,
  ForgotPasswordRequest,
  LoginRequest,
  PageRequest,
  RemoveFunctionRequest,
  ResetPasswordRequest,
} from './facade';
import BulletFile from './BulletFile';
import { BulletKey } from './key/bulletKey';
import { BulletFiles } from './BulletFiles';

class BulletHttpRequestLibrary {
  private bulletAuthentication: BulletAuthentication;
  constructor(bulletAuthentication: BulletAuthentication) {
    this.bulletAuthentication = bulletAuthentication;
  }

  getBlobFromUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      callback(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  createBulletKey = (body: BulletKey): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged/management/v1`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  createrootuser = (
    userModel: CreateUserRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/root/${version}/createrootuser`;

    const bulletBody = {
      body: userModel,
    };
    return this.axiosPost(url, bulletBody)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  createuser = (
    body: CreateUserRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/createUser`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  paginatedUsers = (
    body: PageRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/root/${version}/users`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  paginatedErors = (
    body: PageRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/root/${version}/errors`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  paginatedFunctions = (
    body: PageRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged-user/${version}/functions`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  registerUpdateFunction = (
    functionRequest: DeltaFunctionRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/root/${version}/registerupdatedeltafunction`;

    if (!functionRequest.guid) {
      functionRequest.guid = this.generateGuid();
    }
    const bulletBody = {
      body: functionRequest,
    };
    return this.axiosPost(url, bulletBody)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  testFunction = (
    functionRequest: DeltaFunctionRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged-user/${version}/executedeltafunction`;

    if (!functionRequest.guid) {
      functionRequest.guid = this.generateGuid();
    }
    const bulletBody = {
      body: functionRequest,
    };
    return this.axiosPost(url, bulletBody)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  createuserandlogin = (
    body: CreateUserRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/createUserAndLogin`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  forgotpassword = (
    body: ForgotPasswordRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/forgotPassword`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  resetpassword = (
    body: ResetPasswordRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/resetpassword`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  login = (body: LoginRequest, version = 'v1'): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/login`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  changepassword = (
    body: ChangePasswordRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged-user/${version}/changePassword`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  delete = (version = 'v1'): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged-user/${version}/delete`;

    return this.axiosPost(url, {})
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  confirmuser = (
    body: ConfirmUserRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/user/${version}/confirm`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  // registerupdatedeltafunction = (
  //   body: DeltaFunctionRequest,
  //   version = 'v1'
  // ): Promise<CustomHttpResponse> => {
  //   if (!body.guid) {
  //     body.guid = this.generateGuid();
  //   }
  //   const { serverUrl } = this.bulletAuthentication;
  //   const url = `${serverUrl}/bulletapi/root/${version}/registerupdatedeltafunction`;

  //   return this.axiosPost(url, body)
  //     .then((serverResponse) => {
  //       return Promise.resolve(serverResponse);
  //     })
  //     .catch((e) => {
  //       return Promise.resolve({
  //         data: null,
  //         success: false,
  //         message: e,
  //       });
  //     });
  // };

  removedeltafunction = (
    body: RemoveFunctionRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/root/${version}/removedeltafunction`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  executedeltafunction = (
    body: DeltaFunctionRequest,
    version = 'v1'
  ): Promise<CustomHttpResponse> => {
    if (!body.guid) {
      body.guid = this.generateGuid();
    }
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}/bulletapi/logged-user/${version}/executedeltafunction`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  sendApiRequest = (body): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;

    return this.axiosPost(serverUrl, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  sendBulletFilesApiRequest = (
    body: any,
    fileList: BulletFile[]
  ): Promise<any> => {
    const { serverUrl } = this.bulletAuthentication;
    const url = `${serverUrl}${BULLET_ROUTE}`;

    // const formFiles: FormData = new FormData();

    // fileList.forEach((iFile) => {
    //   iFile.addFileToForm(formFiles);
    // });

    // const deletedFiles = [];
    // fileList
    //   .filter((el) => el.status === IFileStatus.DeletedFile)
    //   .forEach((el: BulletFile) =>
    //     deletedFiles.push({
    //       guid: el.key,
    //       filePath: el.bucket,
    //     })
    //   );

    // const replacedFiles = [];
    // fileList
    //   .filter((el) => el.status === IFileStatus.ReplacedFile)
    //   .forEach((el) =>
    //     replacedFiles.push({
    //       guid: el.key,
    //       filePath: el.bucket,
    //     })
    //   );

    const formFiles = new BulletFiles().createFormData(fileList, body);

    // const fileOptions: FileOptions = new FileOptions();
    // fileOptions.deletedFiles = deletedFiles;
    // // fileOptions.replacedFiles = replacedFiles;
    // fileOptions.storage = body.storage;

    // formFiles.append(
    //   'data',
    //   JSON.stringify({
    //     body,
    //     fileOptions,
    //   })
    // );

    return this.axiosPost(url, formFiles);
  };

  sendBulletApiRequest = (body: any): Promise<CustomHttpResponse> => {
    const { serverUrl } = this.bulletAuthentication;

    const url = `${serverUrl}${BULLET_ROUTE}`;

    return this.axiosPost(url, body)
      .then((serverResponse) => {
        return Promise.resolve(serverResponse);
      })
      .catch((e) => {
        return Promise.resolve({
          data: null,
          success: false,
          message: e,
        });
      });
  };

  axiosPost = async (url, body): Promise<CustomHttpResponse> => {
    const headers = {
      headers: this.createHeader(),
    };

    try {
      const axiosResponse = await axios.post(url, body, headers);
      return new CustomHttpResponse(axiosResponse.data);
    } catch (error) {
      const er: any = {};
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        er.data = error.response.data;
        er.status = error.response.status;
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        er.request = error.request;
      } else {
        er.message = error.message;
      }
      return new CustomHttpResponse({
        error: 1,
        message: er,
      });
    }
  };

  private createHeader = (): any => {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: this.bulletAuthentication.authentication,
    };
    return headers;
  };

  generateGuid = () => {
    var u = '',
      i = 0;
    while (i++ < 36) {
      var c = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'[i - 1],
        r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      u += c == '-' || c == '4' ? c : v.toString(16);
    }
    return u;
  };
}

export default BulletHttpRequestLibrary;
