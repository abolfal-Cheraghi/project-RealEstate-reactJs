import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'

export default function Modal(props) {
  return (
    <Transition appear show={props.show} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={props.closeModal}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black/80" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-myGreen-100 p-6 text-left align-middle shadow-xl transition-all">
                              <Dialog.Title className="text-center text-lg s-medium md:text-xl">
                                {props.title}
                              </Dialog.Title>
                              {props.children}
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
  )
}
